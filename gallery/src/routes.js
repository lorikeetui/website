// Design guidelines
import PagePrinciples from './pages/PageColors'
import PageBuildingBlocks from './pages/PageText'
import PageDealingWithLatency from './pages/PageIcons'
import PageSigningTransactions from './pages/PageAragonApp'
import PageInformingUsers from './pages/PageAppBar'
import PageMotion from './pages/PageNavigationBar'
import PageLayout from './pages/PageAppView'
import PageTypografy from './pages/PageBadge'
import PageAccessibility from './pages/PageCountdown'

// Reference
import PageButtons from './pages/PageButton'
import PageDropDown from './pages/PageDropDown'
import PageContextMenu from './pages/PageContextMenu'
import PageRadioButtons from './pages/PageRadioButton'
import PageTextInput from './pages/PageTextInput'
import PageField from './pages/PageField'
import PageLink from './pages/PageSafeLink'
import PageCards from './pages/PageCard'
import PageTable from './pages/PageTable'
import PageGraph from './pages/PageCircleGraph'
import PagePanels from './pages/PageSidePanel'
import PageTheming from './pages/PageTheme'

// Contributing
import PageJoinTheCommunity from './pages/PageRedraw'
import PageHowToContribute from './pages/PageInfo'

const preparePage = ([comp, name, path]) => ({
  comp,
  name,
  path: '/' + path.replace(/^\//, '') + (path === '/' ? '' : '/'),
})

export const PAGE_GROUPS = [
  {
    name: 'Design Guidelines',
    pages: [
      [PagePrinciples, 'Principles', '/principles'],
      [PageBuildingBlocks, 'Building blocks', '/building-blocks'],
      [PageDealingWithLatency, 'Dealing with latency', '/dealing-with-latency'],
      [PageSigningTransactions, 'Signing transactions', '/signing-transactions'],
      [PageInformingUsers, 'Informing users', '/informing-users'],
      [PageMotion, 'Motion', '/motion'],
      [PageLayout, 'Layout', '/layout'],
      [PageTypografy, 'Typografy', '/typografy'],
      [PageAccessibility, 'Accessibility', '/accessibility'],
    ].map(preparePage),
  },
  {
    name: 'Reference',
    pages: [
      [PageButtons, 'Buttons', '/buttons'],
      [PageDropDown, 'Drop down', '/drop-down'],
      [PageContextMenu, 'Context menu', '/context-menu'],
      [PageRadioButtons, 'Radio buttons', '/radio-buttons'],
      [PageTextInput, 'Text input', '/text-input'],
      [PageField, 'Field', '/field'],
      [PageLink, 'Links', '/link'],
      [PageCards, 'Cards', '/cards'],
      [PageTable, 'Table', '/table'],
      [PageGraph, 'Graphs', '/graphs'],
      [PagePanels, 'Panels', '/panels'],
      [PageTheming, 'Theming', '/theming'],
    ].map(preparePage),
  },
  {
    name: 'Contributing',
    pages: [
      [PageHowToContribute, 'How to contribute', '/how-to-contribute'],
      [PageJoinTheCommunity, 'Join the comunity', '/join-the-comunity'],
    ].map(preparePage),
  },
]

export const PAGES = [
  preparePage([PagePrinciples, 'Aragon UI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]
