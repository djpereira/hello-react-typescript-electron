import * as React from 'react';
import { GreeterModel } from './GreeterModel';

interface GreeterMessageProps extends GreeterModel {
}

/**
 * Presentational component
 */
export class GreeterMessage extends React.Component<GreeterMessageProps, void> {

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }

}