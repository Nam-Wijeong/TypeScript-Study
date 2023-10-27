{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'wijeong';
  const address: Text = 'Korea';

  type Num = number;

  type Student = {
    name: string,
    age: number
  }

  const studeng: Student = {
    name: 'wijeong',
    age: 12,
  }

  /**
   * Stiring Literal Types
   */
  type Name = 'name'
  let wijeongName: Name;
  wijeongName = 'name';

  type JSON = 'json'
  const json: JSON = 'json'

  type Boal = true;
}