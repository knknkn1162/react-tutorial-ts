import * as React from 'react';

interface ReservationState {
  isGoing: boolean,
  numberOfGuests: number,
  name: string,
}

class Reservation extends React.Component<{}, ReservationState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      name: null,
    };
  }


  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.currentTarget;

    switch(target.type) {
      case 'checkbox':
        this.setState({
          isGoing: target.checked
        })
        break;
      case 'number':
        this.setState({
          numberOfGuests: parseInt(target.value)
        })
        break;
    }
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Reservation;
