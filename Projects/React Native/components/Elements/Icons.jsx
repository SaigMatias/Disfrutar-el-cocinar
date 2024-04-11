import { AntDesign, Entypo } from "@expo/vector-icons";

const Icons = ({ ant, refer, size, color, styleAdd }) => {
  return (
    <>
      {ant ? (
        <AntDesign name={refer} size={size} color={color} />
      ) : (
        <Entypo name={refer} size={size} color={color} style={styleAdd}/>
      )}
    </>
  );
};

export default Icons;
