import sinon from 'sinon';
import App from '../../client/src/components/App';
import MenuCategoryButtons from '../../client/src/components/menuCategoryButtons';
import MenusByHeaders from '../../client/src/components/menusByHeaders';
import MenuEntry from '../../client/src/components/menuEntry';
// import idObj from 'identity-obj-proxy';

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
    expect(wrapper.find('#menu-container-id').hasClass('menus_container')).toEqual(true);
  });
});


describe('<MenuCategoryButtons />', () => {
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
    expect(wrapper.find('#dinner').hasClass('submenu_header_button_link')).toEqual(true);
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
    expect(wrapper.find('#lunch').hasClass('submenu_header_button_link')).toEqual(true);
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
    expect(wrapper.find('#appetizer').hasClass('submenu_header_button_link')).toEqual(true);
  });
});

describe('<MenusByHeaders />', () => {
  it('check MenusByHeaders components are rendered correctly', () => {
    const headers = ['dinner', 'lunch', 'appetizer'];
    const wrapper = shallow(<MenusByHeaders menuHeaders={headers} />);
    expect(wrapper.find(MenuEntry)).toHaveLength(headers.length);
  });
});

describe('<MenuEntry />', () => {
  const entries = [
    {menu_name: "name1", menu_price: 35, menu_description: "this is test description1"},
    {menu_name: "name2", menu_price: 36, menu_description: "this is test description2"},
    {menu_name: "name3", menu_price: 37, menu_description: "this is test description3"}
  ];
  let wrapper = shallow(<MenuEntry entries={entries} />);
  it('check MenuEntry components are rendered correctly', () => {
    expect(wrapper.find("div.menu_entry_item")).toHaveLength(entries.length);
  });
});