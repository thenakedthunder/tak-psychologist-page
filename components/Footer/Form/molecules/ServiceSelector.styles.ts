import { Green050, Green100, Grey010 } from 'components/styling/colors';

interface SelectState {
  menuIsOpen: boolean;
}

const baseStyles = {
  control: (styles: object, state: SelectState) => ({
    ...styles,
    backgroundColor: Grey010,
    border: '0',
    '&:focus-within': {
      border: `1px solid ${Green050}`,
      borderBottom: `${state.menuIsOpen ? 'none' : `1px solid ${Green050}`}`,
    },
    '&:focus': {
      border: `1px solid ${Green050}`,
    },
    '&:hover': {
      borderBottom: `1px solid ${Green050}`,
    },
    boxShadow: 'none',
    borderBottom: `1px solid ${Green050}`,
    borderRadius: '14px 14px 0px 0px',
    height: '52px',
    padding: '15px 2px 15px 20px',
  }),
  option: (styles: object) => ({
    ...styles,
    backgroundColor: Grey010,
    color: Green100,
    padding: '15px 2px 15px 20px',
    borderRadius: '0px 0px 14px 14px',
    borderBottom: '0px',
  }),
  menu: (styles: object) => ({
    ...styles,
    borderRadius: '0px 0px 14px 14px',
    marginTop: '0px',
    border: `1px solid ${Green050}`,
    borderTop: '0px',
    boxShadow: 'none',
  }),
  singleValue: (styles: object) => ({
    ...styles,
    color: Green100,
    fontFamily: '"Figtree" sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '140%',
    margin: '0',
  }),
  valueContainer: (styles: object) => ({
    ...styles,
    padding: '0',
    display: 'block',
  }),
  input: (styles: object) => ({
    ...styles,
    display: 'grid',
  }),
  indicatorSeparator: (styles: object) => ({
    ...styles,
    display: 'none',
  }),
  indicatorsContainer: (styles: object) => ({
    ...styles,
    height: '22px',
    padding: '0',
  }),
  placeholder: (styles: object) => ({
    ...styles,
    color: Green050,
  }),
};

export default baseStyles;
