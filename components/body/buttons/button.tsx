import React from 'react';
import './buttons.css';
import { ButtonProps } from './types';

const ProjectButton: React.FC<ButtonProps> = ({ imageSrc, altText, buttonText, link }) => {
    return (
        <a href={link} className='button-with-image' target='_blank' rel='noopener noreferrer'> 
            <img src={imageSrc} alt={altText} className='button-image' />
            <span className='button-text'>{buttonText}</span>
        </a>
    );
}

export default ProjectButton;
