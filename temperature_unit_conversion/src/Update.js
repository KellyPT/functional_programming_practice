import * as R from 'ramda';

const MSGS = {
  LEFT_VALUE_INPUT: 'LEFT_VALUE_INPUT',
  RIGHT_VALUE_INPUT: 'RIGHT_VALUE_INPUT'
};

export function leftValueInputMsg(leftValue) {
  return {
    type: MSGS.LEFT_VALUE_INPUT,
    leftValue
  };
}

export function rightValueInputMsg(rightValue) {
  return {
    type: MSGS.RIGHT_VALUE_INPUT,
    rightValue
  };
}

const toInt = R.pipe(parseInt, R.defaultTo(0));

function update(msg, model) {
  switch (msg.type) {
    case MSGS.LEFT_VALUE_INPUT: {
      if (msg.leftValue === '') {
        return { ...model, sourceLeft: true, leftValue: '', rightValue: '' };
      }
      const leftValue = toInt(msg.leftValue);
      return { ...model, sourceLeft: true, leftValue };
    }
    case MSGS.RIGHT_VALUE_INPUT: {
      if (msg.rightValue === '') {
        return { ...model, sourceLeft: false, leftValue: '', rightValue: '' };
      }
      const rightValue = toInt(msg.rightValue);
      return { ...model, sourceLeft: false, rightValue };
    }
  }
  return model;
}

export default update;
