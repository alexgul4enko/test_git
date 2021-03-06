import { compose } from 'redux'
import { withRouter } from '@cranium/router'
import { prefetchResources, navigationToProps } from '@cranium/resource'
import { Loader } from 'common/widgets/loaders'

export default compose(
  withRouter,
  navigationToProps(),
  prefetchResources({
    namespace: 'repo',
    endpoint: '/repos/:owner/:uuid',
  }, {
    Loader,
  }),
)
