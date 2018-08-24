import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import injectSheet from 'react-jss';
import MediaQuery from 'react-responsive';
import { FormattedMessage } from "react-intl";

import Page from '../../components/base/Page';
import BaseFilter from '../../components/base/filters/BaseFilter';
import get from 'lodash/get';
import extend from 'lodash/extend';
import * as actions from "../../services/actions/index";
import {connect} from "react-redux";
import DonorProjects from "./components/DonorProjects";
import Trans from '../../locales/Trans';
import {size as screenSize} from "../../helpers/screen";
import { pageContainer } from '../../helpers/style';

class Donor extends BaseFilter {
  componentDidMount() {
    const { dispatch } = this.props;
    const { params } = this.state;
    const code = get(this.props, 'match.params.code');
    if (dispatch && code) {
      this.actionRequest(
        extend({}, params, {participating_organisation_ref: code.toUpperCase()}),
        'participating_organisation',
        actions.donorRequest
      );
    } else {
      actions.donorInitial();
    }
  }

  render() {
    const { classes } = this.props;
    const code = get(this.props, 'match.params.code');
    const data = get(this.props, 'donor.data.results[0]');
    return (
      <Page pageName={<Trans id='main.menu.donor.detail' text='Donor Detail' />}>
        <Grid className={classes.grid} style={pageContainer} fluid>
          <Row>
            <Col xs={12}>
              <h1 className={classes.title}>{data ? data.participating_organisation : null}</h1>
            </Col>
          </Row>
          <MediaQuery minWidth={screenSize.mobile.maxWidth}>
            <Row>
              <Col xs={12}>
                <h2 className={classes.description}><FormattedMessage id="donor.description" defaultMessage="Description" /></h2>
              </Col>
            </Row>
          </MediaQuery>
          <hr className={classes.divider} />
          <Row className={classes.table}>
            <Col xs={12}>
              <DonorProjects code={code}/>
            </Col>
          </Row>
        </Grid>
      </Page>
    )
  }
}

const mapStateToProps = (state, ) => {
  return {
    donor: state.donor,
  }
};

const styles = {
  title: {
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 300,
  },
  description: {
    marginBottom: 10,
    fontWeight: 300,
  },
  table: {
    marginBottom: 15,
    marginLeft: -16,
  },
  grid: {
    paddingLeft: '135px !important',
    '@media (max-width: 767px)': {
      paddingLeft: '16px !important',
    },
  },
  divider: {
    border: 'solid 3px #173d8e',
    opacity: 0.3,
  }
};

export default injectSheet(styles)(connect(mapStateToProps)(Donor));