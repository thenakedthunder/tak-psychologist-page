import styled from 'styled-components';
import { useState } from 'react';

import { SmallParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import ErrorMessage from 'components/Form/atoms/ErrorMessage';

interface MessageInputProps {
  className?: string;
  placeholder: string;
  value: string;
  onChanged: ((value: string) => void);
  error: string;
}

const TextAreaWrapper = styled.div`
  position: relative;
`;

const Counter = styled(SmallParagraph)`
  position: absolute;
  bottom: 20px;
  text-align: end;
  right: 20px;
`;

const ErrorMessageWrapper = styled.div`
  margin-top: -5px;
`;

const MessageInput = ({
  className = '', placeholder, value, onChanged, error,
}: MessageInputProps) => {
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);
  const messageMaxCharacterCount = 300;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChanged(event.target?.value);
    const input = event.target;
    setMessageCharacterCount(input.value.length);
    input.scrollTop = input.scrollHeight;
  };

  return (
    <div>
      <TextAreaWrapper>
        <textarea
          id="message"
          className={className}
          name="message"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          maxLength={300}
        />
        <Counter
          color={(error || messageCharacterCount === 300) ? '#FF3030' : Green050}
        >
          {messageCharacterCount}
          /
          {messageMaxCharacterCount}
        </Counter>
      </TextAreaWrapper>

      {error
        && (
          <ErrorMessageWrapper>
            <ErrorMessage error={error} />
          </ErrorMessageWrapper>
        )}
    </div>
  );
};

export default MessageInput;