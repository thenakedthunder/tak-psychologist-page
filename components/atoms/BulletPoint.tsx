import styled from 'styled-components';

interface BulletPointStyledProps {
  fillColor: string;
}

const BulletPointStyled = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props: BulletPointStyledProps) => props.fillColor};;
  border-radius: 50%;
  margin-top: 12px;
`;

interface BulletPointProps {
  color: string;
}

const BulletPoint = ({ color } : BulletPointProps) => <BulletPointStyled fillColor={color} />;

export default BulletPoint;
