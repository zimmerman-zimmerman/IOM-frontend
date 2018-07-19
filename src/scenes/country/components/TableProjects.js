import React, { Component } from 'react';
import Table from 'antd/es/table';
import { injectIntl, intlShape } from "react-intl";
import {connect} from "react-redux";
import get from 'lodash/get';
import { format } from 'd3-format';
import { Link } from 'react-router-dom';

import * as actions from "../../../services/actions/index";

class TableProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        fields: 'id,title,iati_identifier,activity_dates,activity_status,sectors,' +
        'participating_organisations,aggregations',
        convert_to: 'usd',
        recipient_country: props.countryCode.toUpperCase(),
        page_size: 50,
        reporting_organisation_identifier: process.env.REACT_APP_REPORTING_ORGANISATION_IDENTIFIER
      }
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { params } = this.state;
    if (dispatch) {
      if (params) {
        dispatch(actions.countryActivitiesRequest(params));
      } else {
        dispatch(actions.countryActivitiesInitial());
      }
    }
  }

  addKey(dataSource) {
    let data = [];
    dataSource.forEach(function(item) {
      item.key = get(item, 'id');
      data.push(item);
    });
    return data;
  }

  render() {
    const { intl, countryActivities } = this.props;
    const data = get(countryActivities, 'data.results');
    const usd = intl.formatMessage({id: 'currency.usd.symbol', defaultMessage: '$'});
    const columns = [{
      title: intl.formatMessage({id: 'country.table.projects.header.donors', defaultMessage: 'Donors'}),
      key: 'donors',
      width: '20%',
      render: obj => 
        <Link to={`/donors/${obj.participating_organisations[0].ref}`}>{obj.participating_organisations[0].narratives[0].text}</Link>
    },{
      title: intl.formatMessage({id: 'country.table.projects.header.title', defaultMessage: 'Project Title'}),
      key: 'title',
      width: '30%',
      render: obj => 
        <Link to={`/projects/${obj.id}`}>{obj.title.narratives[0].text}</Link>
    },{
      title: intl.formatMessage({id: 'country.table.projects.header.budget', defaultMessage: 'Budget'}),
      dataIndex: 'aggregations.activity.budget_value',
      className: 'number',
      key: 'budget',
      render: value => <span>{usd}{format(',.2f')(value)}</span>
    },{
      title: intl.formatMessage({id: 'country.table.projects.header.status', defaultMessage: 'Project status'}),
      dataIndex: 'activity_status.name',
      key: 'status'
    },{
      title: intl.formatMessage({
        id: 'country.table.projects.header.type', defaultMessage: 'Sector by IOM project type'
      }),
      dataIndex: 'sectors[0].sector.name',
      key: 'type'
    },{
      title: intl.formatMessage({
        id: 'country.table.projects.header.start', defaultMessage: 'Start date'
      }),
      dataIndex: 'activity_dates[1].iso_date',
      key: 'start'
    },{
      title: intl.formatMessage({
        id: 'country.table.projects.header.end', defaultMessage: 'End date'
      }),
      dataIndex: 'activity_dates[0].iso_date',
      key: 'end'
    }];
    return(
      <Table dataSource={data ? this.addKey(data) : null} columns={columns} size="middle"
             scroll={{ x: 1800 }}
             loading={countryActivities.request}
      />
    )
  }
}

const mapStateToProps = (state, ) => {
  return {
    countryActivities: state.countryActivities
  }
};

TableProjects.propTypes = {
  intl: intlShape.isRequired
};

export default connect(mapStateToProps)(injectIntl(TableProjects));