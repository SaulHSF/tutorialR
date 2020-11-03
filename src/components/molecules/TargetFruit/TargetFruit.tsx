// libs
import React from 'react';

// styles
import styles from './TargetFruit.module.css';

interface TargetFruitProps {
  name?: string;
  price?: number;
}

interface TargetFruitState {
  quantity: number;
}

class TargetFruit extends React.Component<TargetFruitProps, TargetFruitState> {
  state: TargetFruitState = {
    quantity: 0
  };

  add = () => {
    this.setState((state: TargetFruitState) => ({ quantity: state.quantity + 1 }));
  };

  remove = () => {
    this.setState((state: TargetFruitState) => ({ quantity: state.quantity - 1 }));
  };

  clean = () => {
    this.setState({ quantity: 0 });
  };

  validateStateTarget = (): string => {
    const { quantity } = this.state;
    if (quantity > 0) {
      return styles['card-container-active'];
    } else if (quantity < 0) {
      return styles['card-container-inactive'];
    } else {
      return '';
    }
  };

  render() {
    const { name, price } = this.props;
    const { quantity } = this.state;

    return (
      <div className={`${styles.card} ${this.validateStateTarget()}`}>
        <h1>{name}</h1>
        <p>cantidad: {quantity}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
        <button onClick={this.clean}>clean</button>
        <p>{price}</p>
        <p>Total: ${quantity * (price || 0)}</p>
      </div>
    );
  }
}

export default TargetFruit;
