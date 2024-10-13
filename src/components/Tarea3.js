import React from "react";

export function UncontrolledCheckbox(props) {
    const [checked, setChecked] = React.useState(props.initialValue);

    return (
        <React.Fragment>
            <lavel>{props.name}</lavel>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        </React.Fragment>
    );
};

export function CheckboxList(props) {
    return (
        <div>
            {Object.entries(props.items).map(([key, value]) => (
                <UncontrolledCheckbox 
                    key={key} 
                    initialValue={value} 
                    name={key} 
                />
            ))}
        </div>
    );
};