import sinon from 'sinon';
import App from '../../client/src/components/App';
import MenuCategoryButtons from '../../client/src/components/MenuCategoryButtons';
import MenusByHeaders from '../../client/src/components/MenusByHeaders';
import MenuEntry from '../../client/src/components/MenuEntry';

describe('<App />', () => {
  it('check MenuCategoryButtons components are rendered correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MenuCategoryButtons)).toHaveLength(1);
  });

  it('check MenusByHeaders components are rendered correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MenusByHeaders)).toHaveLength(1);
  });

  it('check menu collapse button functionality', () => {
    const wrapper = shallow(<App />);
    wrapper.find('#collapse-button').simulate('click');
    expect(wrapper.find('#menu-container-id').hasClass('menu-container')).toEqual(true);
  });
});

describe('</ MenusByHeaders>', () => {
  it('check MenuEntry components are rendered correctly', () => {
    const headers = ['dinner', 'lunch', 'appetizer'];
    const wrapper = shallow(<MenusByHeaders menuHeaders={headers} />);
    expect(wrapper.find(MenuEntry)).toHaveLength(headers.length);
  });
});

describe('</ MenuCategoryButtons>', () => {
  it('check dinner MenuCategoryButtons click functionality', () => {
    const menuCategory = [{ submenu_name: 'dinner' }, { submenu_name: 'lunch' }, { submenu_name: 'appetizer' }];
    let currentSubMenu = 'dinner';
    const handleMenuCategoryClick = sinon.spy();
    const wrapper = shallow(
      <MenuCategoryButtons
        restaurants={menuCategory}
        handleMenuCategoryClick={handleMenuCategoryClick}
        currentSubMenu={currentSubMenu}
      />
    );
    wrapper.find('#dinner').simulate('click');
    expect(wrapper.find('#dinner').hasClass('button-menu-link-active__3KrRGgFS')).toEqual(true);
  });

  it('check lunch MenuCategoryButtons click functionality', () => {
    const menuCategory = [{ submenu_name: 'dinner' }, { submenu_name: 'lunch' }, { submenu_name: 'appetizer' }];
    let currentSubMenu = 'lunch';
    const handleMenuCategoryClick = sinon.spy();
    const wrapper = shallow(
      <MenuCategoryButtons
        restaurants={menuCategory}
        handleMenuCategoryClick={handleMenuCategoryClick}
        currentSubMenu={currentSubMenu}
      />
    );
    wrapper.find('#lunch').simulate('click');
    expect(wrapper.find('#lunch').hasClass('button-menu-link-active__3KrRGgFS')).toEqual(true);
  });

  it('check lunch MenuCategoryButtons click functionality', () => {
    const menuCategory = [{ submenu_name: 'dinner' }, { submenu_name: 'lunch' }, { submenu_name: 'appetizer' }];
    let currentSubMenu = 'appetizer';
    const handleMenuCategoryClick = sinon.spy();
    const wrapper = shallow(
      <MenuCategoryButtons
        restaurants={menuCategory}
        handleMenuCategoryClick={handleMenuCategoryClick}
        currentSubMenu={currentSubMenu}
      />
    );
    wrapper.find('#appetizer').simulate('click');
    expect(wrapper.find('#appetizer').hasClass('button-menu-link-active__3KrRGgFS')).toEqual(true);
  });
});
