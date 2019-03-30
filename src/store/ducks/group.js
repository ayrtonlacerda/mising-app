export const Types = {
  ADD_DISCIPLINA: 'group/ADD_DISCIPLINA',
  ADD_FALTA: 'group/ADD_FALTA',
  RMV_DISCIPLINA: 'group/RMV_DISCIPLINA',
}

const INITIAL_STATE = {
  group: [],
}

export default function groupState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_DISCIPLINA:
      return {...state,
        group: [...state.group, {
          id: action.data.id,
          name: action.data.name,
          creditos: action.data.qtd,
          maxFaltas: action.data.totalFaltas,
          faltas: 0,
        }]
      };
    case Types.ADD_FALTA: {
      const group = addFaltaDisciplina(action.data, state);
      return { ...state, group };
    }
    case Types.RMV_DISCIPLINA: {
      const group = removeDisciplina(action.data, state);
      return { ...state, group };
    }
    default:
      return state;
  }
}

/*
Estrutura
{
  id: ,
  name: ,
  creditos: ,
  maxFaltas: ,
  faltas: ,
}

item.id: item.id,
      item.name: item.name,
      item.creditos: item.creditos,
      item.maxFaltas: item.maxFaltas,
      item.faltas: item.faltas + 1,

       group.map(item => {
      item = {
        ...item,
        faltas: item.faltas + 1,
      }
      console.tron.log(['item', item])
    }
  )
*/

export const Creators = {
  addDisciplina: data => ({
    type: Types.ADD_DISCIPLINA,
    data,
  }),

  addFalta: data => ({
    type: Types.ADD_FALTA,
    data,
  }),

  removeDisciplina: data => ({
    type: Types.RMV_DISCIPLINA,
    data,
  }),
}

const addFaltaDisciplina = (id, state) => {
  let group = state.group;

  group.filter(item => {
    if (item.id === id) {
      item.faltas = item.faltas + 1;
    }
  })

  console.tron.log(['group', group])
  return group;
}

const removeDisciplina = (id, state) => {
  var group = state.group;
  let count = 0;
  group.map(item => {
      if (item.id === id) {
        group.splice(count, 1);
      }
      count += 1;
  });
  return group;
}
