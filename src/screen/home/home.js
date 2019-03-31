import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Group, AddGroup } from '../../components';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GroupActions } from '../../store/ducks/group';


class Home extends Component {
  state = {
    visibleModal: false,
      diciplinas: [
          {
              name: 'Eletronica',
              creditos: 4,
              faltas: 2,
              maxFaltas: 7,
          },
          {
            name: 'Fundamentos 2',
            creditos: 4,
            faltas: 2,
            maxFaltas: 7,
          },
          {
            name: 'SOR',
            creditos: 4,
            faltas: 2,
            maxFaltas: 7,
        },
        {
            name: 'PrinCom',
            creditos: 4,
            faltas: 2,
            maxFaltas: 7,
        },
        {
            name: 'Lab. Eletronica',
            creditos: 2,
            faltas: 1,
            maxFaltas: 3,
        },
      ]
  }

  openModal = () => this.setState({ visibleModal: true });
  closeModal = () => this.setState({ visibleModal: false });

  render() {
    const { visibleModal } = this.state;
    const { groupState } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Text style={styles.title}>Minhas Disciplinas</Text>
        <View style={styles.viewGroup}>
            {
                groupState.group.map(item => <Group data={item} key={item.name}/>)
            }
        </View>
        <View style={styles.viewButton}>
            <TouchableOpacity style={styles.button} onPress={() => this.openModal()}>
                <Text style={styles.plus}>+</Text>
                <Text style={styles.textButton}>Adicionar Disciplina</Text>
            </TouchableOpacity>
        </View>
        {
            visibleModal && (
                <AddGroup 
                    visible={visibleModal}
                    onClose={this.closeModal}
                />
            )
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
    groupState: state.groupState,
  });
  
const mapDispatchToProps = dispatch => bindActionCreators(GroupActions, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);

