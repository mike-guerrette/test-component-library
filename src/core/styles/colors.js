export const Palette = {
  // Colors
  Red: {
    Dark: '#EB3349',
    Default: '#EE3F46',
    Light: '#F26D73',
    Pale: '#FCE4E5'
  },
  Orange: {
    Dark: '#F45D43',
    Default: '#FD4B46',
    Light: '#F7AA86',
    Pale: '#FDEEE6'
  },
  Yellow: {
    Dark: '#F48700',
    Default: '#FFB150',
    Light: '#FFC274',
    Pale: '#FEE9CE'
  },
  Green: {
    Dark: '#4AB223',
    Default: '#13B762',
    Light: '#90D079',
    Pale: '#E1F6DA'
  },
  Blue: {
    Dark: '#2D99D3',
    Default: '#008CF1',
    Light: '#c1eaff',
    Pale: '#E1F5FF'
  },
  Purple: {
    Dark: '#604788',
    Default: '#8E45A5',
    Light: '#B275C5',
    Pale: '#F7E2FE'
  },

  // Neutrals
  Navy: {
    Dark: '#252A2E',
    Default: '#32383E',
    Light: '#9CAFBE',
    Pale: '#D2DAE1'
  },
  Gray: {
    Dark: '#666666',
    Default: '#999999',
    Light: '#DDDDDD',
    Pale: '#EBEBEB'
  },
  White: {
    Default: '#FFFFFF'
  }
};

export const UI = {
  Border: {
    Default: Palette.Gray.Light,
    Alt: Palette.Gray.Pale
  },
  Background: {
    Gray: '#F8F8F8',
    Field: '#E5E8EB',
    Blue: Palette.Blue.Default,
    LightBlue: Palette.Blue.Pale,
    BlackMask: 'rgba(0, 0, 0, 0.5)',
    TransparentWhite: 'rgba(255, 255, 255, 0.85)',
    Invisible: 'rgba(0,0,0,0)',
    White: '#FFFFFF'
  },
  ChevronGray: Palette.Gray.Light,
  Separator: Palette.Gray.Pale,
  Text: {
    Blue: Palette.Blue.Default,
    Dark: Palette.Navy.Dark,
    Default: '#51535B',
    Light: '#656565',
    Byline: Palette.Gray.Default,
    White: '#FFFFFF'
  },
  Link: {
    Default: Palette.Blue.Dark,
    Disabled: Palette.Gray.Light
  },
  Label: {
    Default: '#656565',
    Disabled: Palette.Gray.Default
  },
  Input: {
    Selected: '#6F7488',
    Checkbox: '#6F7488',
    Placeholder: Palette.Gray.Dark
  }
};

const Colors = {};
Colors.Palette = Palette;
Colors.UI = UI;

export default Colors;
