import { render } from '@testing-library/react';
import { Badge, Button, Card, Input } from '../../components/primitives';

describe('Components', () => {
  test('Button renders correctly', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  test('Card renders correctly', () => {
    const { getByText } = render(<Card>Test Card</Card>);
    expect(getByText('Test Card')).toBeInTheDocument();
  });

  test('Input renders correctly', () => {
    const { getByDisplayValue } = render(<Input value="test" readOnly />);
    expect(getByDisplayValue('test')).toBeInTheDocument();
  });

  test('Badge renders correctly', () => {
    const { getByText } = render(<Badge>Test Badge</Badge>);
    expect(getByText('Test Badge')).toBeInTheDocument();
  });
});
