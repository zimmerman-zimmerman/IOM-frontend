import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Button, Spin } from 'antd';
import { FormattedMessage } from "react-intl";
import _ from "lodash";

import * as actions from '../../../services/actions/index';
import PieReCharts from './PieReCharts';

const { Content } = Layout;

class FundingGoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        fields: 'id,iati_identifier,reporting_organisation,activity_dates,aggregations,sectors,title',
        ordering: '-aggregations.activity.budget_value',
        hierarchy: 1,
        activity_status: '2,3,4',
        reporting_organisation_identifier: process.env.REACT_APP_REPORTING_ORGANISATION_IDENTIFIER
      }
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { params } = this.state;
    if (dispatch) {
      if (params) {
        dispatch(actions.homeActivitiesRequest(params));
      } else {
        dispatch(actions.homeActivitiesInitial());
      }
    }
  }

  render() {
    const { homeActivities } = this.props;
    const data = [];
    _.forEach(_.get(homeActivities, 'data.results'), function(item){
      data.push({
        name: _.get(item, 'title.narratives[0].text'),
        value: _.get(item, 'aggregations.activity.budget_value')
      })
    });
    return (
      <Spin spinning={homeActivities.request}>
        <Layout>
          <Content className="Graphs">
            <Row>
              <Col span={24}>
                <PieReCharts
                  title={
                    <FormattedMessage id="home.funding.goes.title"
                                      defaultMessage="Where the Funding Goes"
                    />
                  }
                  data={_.slice(data, 0, 5)}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24} className="Pad">
                <Button className="Button">
                  <FormattedMessage id="home.funding.goes.button"
                                    defaultMessage="See All Publisher Services"
                  />
                </Button>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Spin>
    )
  }
}

const mapStateToProps = (state, ) => {
  return {
    homeActivities: state.homeActivities
  }
};

export default connect(mapStateToProps)(FundingGoes);