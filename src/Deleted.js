function Deleted({ deleted, children }) {
  if (deleted) {
    return <del>{children}</del>;
  } else {
    return children;
  }
}

export default Deleted;
