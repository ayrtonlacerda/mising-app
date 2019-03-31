import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GroupActions } from '../../store/ducks/group';

class AddGroup extends Component {
  state = {
    qtd: 0,
    name: '',
  }

  addDisciplina = () => {
    const { addDisciplina, onClose } = this.props;
    const { qtd, name } = this.state;
    let totalFaltas = (qtd * 2) - 1;
    let id = Math.random();
    if (qtd > 1 && name !== '') {
      addDisciplina({ qtd, name, totalFaltas, id })
      onClose()
    }
  }

  addQtd = () => {
    const { qtd } = this.state;
    this.setState({ qtd: qtd + 1 })
  }

  subQtd = () => {
    const { qtd } = this.state;
    if (qtd > 0) {
      this.setState({ qtd: qtd - 1 })
    }
  }

  render() {
    const { visible, onClose } = this.props;
    const { qtd } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={visible}
      >
        <View style={styles.container}>
          <View style={styles.viewAdd}>
            <View style={styles.viewAdd2}>
              <TouchableOpacity style={styles.buttonTouch} onPress={() => onClose()}>
                <View style={styles.buttonT} />
              </TouchableOpacity>
              <Text style={styles.title}>Adicionar Disciplina</Text>
              <View style={styles.viewForm}>
                <Text style={styles.textForm}>Nome da discipina</Text>
                <TextInput
                  onChangeText={name => this.setState({ name })}
                  value={this.state.name}
                  underlineColorAndroid={'rgba(0,0,0, 0)'}
                  style={styles.input}
                />
              </View>
              <View style={styles.viewForm1}>
                <Text style={styles.textForm}>Quantidade de creditos</Text>
                <View style={styles.viewFormButton}>
                  <TouchableOpacity style={styles.buttonPlus} onPress={() => this.subQtd()}>
                    <Icons name="ios-remove" size={18} color="#FFF" />
                  </TouchableOpacity>
                  <Text style={styles.textFormButton}>{qtd}</Text>
                  <TouchableOpacity style={styles.buttonPlus} onPress={() => this.addQtd()}>
                    <Icons name="ios-add" size={18} color="#FFF" />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => this.addDisciplina()}>
                <Text style={styles.textButton}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  groupState: state.groupState,
});

const mapDispatchToProps = dispatch => bindActionCreators(GroupActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);
