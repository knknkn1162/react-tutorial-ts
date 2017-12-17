import * as React from "react";

class CustomTextInput extends React.Component<{}, {}> {
  // Once the component mounts, 
  // React will call the ref callback with the DOM element, and will call it with null when it unmounts.
  // see also https://stackoverflow.com/questions/33796267/how-to-use-refs-in-react-with-typescript
  private textInput: HTMLInputElement;
  constructor(props: {}) {
    super(props);
  }

  focusTextInput = (): void => {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input } }
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput;
