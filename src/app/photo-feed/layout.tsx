const LayoutPhoto = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div>
      <h2>Layout Photo Feed</h2>
      {children}
      {modal}
    </div>
  );
};

export default LayoutPhoto;
