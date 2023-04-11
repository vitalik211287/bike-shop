import { Button } from "./IconButton.styled";


const IconButton = ({ children, onClick, ...allyProps }) => (
  <Button type="button" onClick={onClick} {...allyProps}>
    {children}
  </Button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

export default IconButton