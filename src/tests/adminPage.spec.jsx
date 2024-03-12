import { render} from '@testing-library/react'
import { describe, test, expect, it } from 'vitest'
import AdminPage from '../routes/AdminPage/index.jsx';

describe('Testes da página admin', () => {
    test('Encontrar a página de administrador', () => {
        const Adm = render(<AdminPage/>);
        expect(Adm).toBeTruthy();
    });
    it('Encontrar H1 com Admin Page', ()=> {
        const Adm = render(<AdminPage/>);
        expect(Adm).toBeTruthy();
        const h1 = Adm.container.querySelector('h1');
        expect(h1?.textContent).toBe('Admin Page');

    })
});