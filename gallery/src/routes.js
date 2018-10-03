// Styles
import PageHome from './pages/PageHome'
import PageColors from './pages/PageColors'
import PageTheme from './pages/PageTheme'
import PageText from './pages/PageText'
import PageIcons from './pages/PageIcons'

// Controls
import PageButton from './pages/PageButton'
import PageDropDown from './pages/PageDropDown'
import PageContextMenu from './pages/PageContextMenu'
import PageRadioButton from './pages/PageRadioButton'
import PageTextInput from './pages/PageTextInput'
import PageField from './pages/PageField'
import PageSafeLink from './pages/PageSafeLink'
import PageSlider from './pages/PageSlider'

// Other components
import PageBadge from './pages/PageBadge'
import PageCircleGraph from './pages/PageCircleGraph'
import PageCountdown from './pages/PageCountdown'
import PageInfo from './pages/PageInfo'

// Containers
import PageAragonApp from './pages/PageAragonApp'
import PageAppBar from './pages/PageAppBar'
import PageNavigationBar from './pages/PageNavigationBar'
import PageAppView from './pages/PageAppView'
import PageSidePanel from './pages/PageSidePanel'
import PageCard from './pages/PageCard'
import PageEmptyStateCard from './pages/PageEmptyStateCard'
import PageTable from './pages/PageTable'

// Providers
import PageRedraw from './pages/PageRedraw'
import PageRedrawFromDate from './pages/PageRedrawFromDate'
import PageObserve from './pages/PageObserve'

const preparePage = ([comp, name, path]) => ({
  comp,
  name,
  path: '/' + path.replace(/^\//, '') + (path === '/' ? '' : '/'),
})

export const PAGE_GROUPS = [
  {
    name: 'Design Guidelines',
    pages: [
      [PageColors, 'Principles', '/principles'],
      [PageText, 'Building blocks', '/building-blocks'],
      [PageIcons, 'Dealing with latency', '/dealing-with-latency'],
      [PageAragonApp, 'Signing transactions', '/signing-transactions'],
      [PageAppBar, 'Informing users', '/informing-users'],
      [PageNavigationBar, 'Motion', '/motion'],
      [PageAppView, 'Layout', '/layout'],
      [PageBadge, 'Typografy', '/typografy'],
      [PageCountdown, 'Accessibility', '/accessibility'],
    ].map(preparePage),
  },
  {
    name: 'Reference',
    pages: [
      [PageButton, 'Buttons', '/buttons'],
      [PageDropDown, 'Drop down', '/drop-down'],
      [PageContextMenu, 'Context menu', '/context-menu'],
      [PageRadioButton, 'Radio buttons', '/radio-buttons'],
      [PageTextInput, 'Text input', '/text-input'],
      [PageField, 'Field', '/field'],
      [PageSafeLink, 'Links', '/link'],
      [PageCard, 'Cards', '/cards'],
      [PageTable, 'Table', '/table'],
      [PageCircleGraph, 'Graphs', '/graphs'],
      [PageSidePanel, 'Panels', '/panels'],
      [PageTheme, 'Theming', '/theming'],
    ].map(preparePage),
  },
  {
    name: 'Providers',
    pages: [
      [PageInfo, 'How to contribute', '/how-to-contribute'],
      [PageRedraw, 'Join the comunity', '/join-the-comunity'],
    ].map(preparePage),
  },
]

export const PAGES = [
  preparePage([PageHome, 'Aragon UI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]
