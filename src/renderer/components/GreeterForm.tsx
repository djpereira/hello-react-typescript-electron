import * as React from 'react';
import { GreeterModel } from './GreeterModel';

export interface GreeterFormProps {
  onNewData: (updates: GreeterModel) => void;
}

/**
 * Presentational component
 */
export class GreeterForm extends React.Component<GreeterFormProps, void>{

  private nameField: HTMLInputElement;
  private messageField: HTMLTextAreaElement;

  onFormSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const updates: GreeterModel = {
    };
    const name = this.nameField.value;
    if (name.length > 0) {
      this.nameField.value = '';
      updates.name = name;
    }
    const message = this.messageField.value;
    if (message.length > 0) {
      this.messageField.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  }

  render() {
    return (
      <form onSubmit={e => this.onFormSubmitted(e)}>
        <div>
          <input type="text" ref={ref => this.nameField = ref} placeholder="Enter name" />
        </div>
        <textarea ref={ref => this.messageField = ref} placeholder="Enter message" />
        <div>
          <button>Set Name</button>
        </div>
      </form>
    );
  }
}