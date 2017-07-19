const lamps = 'QWERTZUIOPASDFGHJKLYXCVBNM'.split('').map((letter) => {
  return {
    letter: letter,
    glowing: false
  };
});
export const config = {
  keyboard: {
    firstRow: 'QWERTZUIOP',
    secondRow: 'ASDFGHJKL',
    thirdRow: 'YXCVBNM'
  },
  choseSlots: [{
    rotor: {
      label: 'I',
      position: 1,
      letters: 'LEYJVCNIXWPBQMDRTAKZGFUHOS'
    }
  },
  {
    rotor: {
      label: 'II',
      position: 1,
      letters: 'AJDKSIRUXBLHWTMCQGZNPYFVOE'
    }
  },
  {
    rotor: {
      label: 'III',
      position: 1,
      letters: 'NZJHGRCXMYSWBOUFAIVLPEKQDT'
    }
  },
  {
    rotor: {
      label: 'IV',
      position: 1,
      letters: 'FKQHTLXOCBJSPDZRAMEWNIUYGV'
    }
  },
  {
    rotor: {
      label: 'V',
      position: 1,
      letters: 'ESOVPZJAYQUIRHXLNFTGKDCMWB'
    }
  }
  ],
  selectedSlots: [{
    rotor: null
  }, {
    rotor: null
  }, {
    rotor: null
  }],
  lamps: lamps
};