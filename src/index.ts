class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;

  }
  public getName(): string {
    return this.name;
  }

  public static async init(name: string): Promise<Person> {
    return new Person(name)
  }
}

(
  async () => {
    const person = await Person.init('John');
    console.log(person.getName());
  }
)().catch(err => console.log(err));
