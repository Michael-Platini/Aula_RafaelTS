import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render', () => {
    renderTheme(<MenuLink>Children</MenuLink>);
    expect(screen.getByRole('Children')).toHaveAttribute('target', '_self');
  });
});

it('should render open in a new tab', () => {
  renderTheme(
    <MenuLink link="http://localhost" newTab={true}>
      Children
    </MenuLink>,
  );
  expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
    'target',
    '_blank',
  );
});

it('should render open in a new tab', () => {
  renderTheme(
    <MenuLink link="http://localhost" newTab={false}>
      Children
    </MenuLink>,
  );
  expect(
    screen.getByRole('link', { name: 'Children' }),
  ).toMatchInlineSnapshot();
});
