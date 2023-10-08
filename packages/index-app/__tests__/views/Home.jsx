import {render} from '@testing-library/react';
import About from '@/views/About';

test('component', () => {
    const {baseElement} = render(<About />);
    console.log('🚀 ~ file: Home.jsx:6 ~ test ~ home:', baseElement);
    expect(baseElement.tagName).toBe('h1');
});

