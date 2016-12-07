import * as React from 'react';
import { GreeterMessage } from './GreeterMessage';
import { GreeterForm } from './GreeterForm';
import { GreeterModel } from './GreeterModel';

interface GreeterState extends GreeterModel {
}

interface GreeterProps extends GreeterModel {
}

/**
 * Container component
 */
export class Greeter extends React.Component<GreeterProps, GreeterState> {

  constructor(props: GreeterProps) {
    super(props);
    this.state = {
      name: props.name,
      message: props.message
    }
  }

  static defaultProps: GreeterProps = {
    name: 'React',
    message: 'React in Electron using TypeScript'
  };

  handleNewData(updates: GreeterState) {
    this.setState(updates);
  }

  render() {
    return (
      <div>
        <GreeterMessage name={this.state.name} message={this.state.message} />
        <GreeterForm onNewData={updates => this.handleNewData(updates)} />
      </div>
    );
  }

}