import { useState } from 'react';
import {
  Container, Radio, Label,
} from './styles';

interface Option {
  label: string
  value: string
}

interface Props{
  data: Option[]
  onSelectedOption: (option: string) => void
}

export default function RadioButton({
  data = [],
  onSelectedOption,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<string>('');

  function handleOptionChange(option: HTMLInputElement) {
    setSelectedOption(option.value);
    if (onSelectedOption) onSelectedOption(option.value);
  }

  return (
    <Container>
      {
        data.map((option) => (
          <Label
            key={option.label}
          >
            {option.label}
            <Radio
              type={'radio'}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={(value) => handleOptionChange(value.target)}
            />
          </Label>

        ))
      }
    </Container>
  );
}
