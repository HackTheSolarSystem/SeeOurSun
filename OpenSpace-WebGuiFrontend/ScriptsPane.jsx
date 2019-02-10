import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pane from './Pane';
import LoadingBlocks from '../common/LoadingBlock/LoadingBlocks';
import Button from '../common/Input/Button/Button';
import FilterList from '../common/FilterList/FilterList';
import PropertyOwner from './Properties/PropertyOwner';

import styles from './ScriptsPane.scss';

class ScriptsPane extends Component {
  constructor(props) {
    super(props);
    this.p1 = React.createRef();
    this.p2 = React.createRef();
    this.p3 = React.createRef();
  }

  _apiCall() {
      const url = 'http://localhost:8000/scripts';
      const data = {
        param1: this.p1.current.value,
          param2: this.p2.current.value,
          param3: this.p3.current.value
      };
      console.log(data);
      fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
            body: JSON.stringify(data)
      });
  }

  render() {
    const { properties } = this.props;
      console.log(styles);

    return (
      <Pane title="Scripts" closeCallback={this.props.closeCallback} >
          <div className={`${styles.scripts}`}>
              <h1 className={`${styles.header}`}>Retrieve Updated NASA Sun Data</h1>
              <label for="param1">Source</label>
              <select name="param1" ref={this.p1}>
                  <option value='soho'>SOHO</option>
                  <option value='sdo'>SDO</option>
              </select>
              <label for="param2">Wavelength</label>
              <input type="number" step="1" name="param2" ref={this.p2} />
              <label for="param3">Date</label>
              <input type="text" name="param2" ref={this.p3} />
              <Button
                onClick={() => this._apiCall()}
                >Send Request
              </Button>
          </div>
      </Pane>
    );
  }
}

ScriptsPane.propTypes = {
  closeCallback: PropTypes.func,
};

ScriptsPane.defaultProps = {
  closeCallback: null,
};

const mapStateToProps = (state) => {
  const sceneType = 'Scene';
  if (!state.propertyTree) {
    return { properties: [] };
  }
  if (!state.propertyTree.subowners) {
    return { properties: [] };
  }
  const properties = state.propertyTree.subowners.filter(element => element.identifier !== sceneType);
  return {
    properties,
  };
};

ScriptsPane = connect(
  mapStateToProps,
)(ScriptsPane);

export default ScriptsPane;
