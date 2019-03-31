import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Swipeout from 'react-native-swipeout';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GroupActions } from '../../store/ducks/group';


class Group extends Component {
  state = {
    swipeoutBtns: [
      {
        text: 'Remover',
        backgroundColor: '#F36363',
        onPress: () => this.removeDisciplina(),
        color: '#fff'
      }
    ]
  }

  addFaltaDisciplina = () => {
    const { addFalta, data } = this.props;
    addFalta(data.id)
  }

  removeDisciplina = () => {
    const { removeDisciplina, data } = this.props;
    removeDisciplina(data.id)
  }

  render() {
    const { data } = this.props;
    const { swipeoutBtns } = this.state;
    return (
      <Swipeout left={swipeoutBtns} backgroundColor="rgba(0,0,0,0)">
        <View style={styles.container}>
          <Text style={{
            ...styles.number,
            color: data.faltas >= data.maxFaltas ? 'rgba(250, 50, 50, 0.70)' : 'rgba(0, 0, 0, 0.35)'
          }}
          >
            {data.faltas} / {data.maxFaltas}
          </Text>
          <Text style={styles.name}>{data.name}</Text>
          <TouchableOpacity style={{
            ...styles.viewButton,
            backgroundColor: data.faltas < data.maxFaltas - 1 ? '#0401B0' : '#E83131',
          }}
            onPress={() => this.addFaltaDisciplina()}
          >
            <Text style={styles.textButton}>Falta</Text>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  }
}

const mapStateToProps = state => ({
  groupState: state.groupState,
});

const mapDispatchToProps = dispatch => bindActionCreators(GroupActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Group);
