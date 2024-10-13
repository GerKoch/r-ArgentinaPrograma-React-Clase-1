import React from "react";

export function MatchNombre(props) {
    const [value, setValue] = React.useState('');
    
    return (
        <input 
            className={'input ' + (value.match(props.nombre) && 'input-match')}
            value={value}
            onChange={e => setValue(e.target.value)}
        />    
    );
};

export function PasswordInput(props) {
    const [value, setValue] = React.useState('');

    return (
        <input 
            className={'input ' + (value.length < props.minLength && 'input-match')}
            type="password"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    );
};

export function ValidationInput(props) {
    const [value, setValue] = React.useState('');

    return (
        <input 
            className={'input ' + (!props.validation(value) && 'input-match')}
            type={props.isPassword ? 'password' : 'text'}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    );
};