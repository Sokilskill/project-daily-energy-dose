import { Rectangle, RecText } from './Rectangle.styled';


export function RectangleAndText({color, text}) {

    return (
      <>
        <Rectangle color={color} />
        <RecText>{text}</RecText>
      </>
    );
}