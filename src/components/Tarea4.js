import React from "react";

export function ControlledCheckbox(props) {
    return (
        <React.Fragment>
            <label>{props.name}</label>
            <input type="checkbox" checked={props.value} onChange={props.onChange} />
        </React.Fragment>
    );
};

export function CheckboxListWithState(props) {
    const [checkboxes, setCheckboxes] = React.useState(props.items);

    return (
        <div>
            {Object.entries(checkboxes).map(([name, value]) => {
                <ControlledCheckbox 
                    key={name}
                    name={name}
                    value={value}
                    onChange={() => {
                        setCheckboxes({ ... checkboxes, [name]: !value });
                    }}
                />
            })}
        </div>
    );
};