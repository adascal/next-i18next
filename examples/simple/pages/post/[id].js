import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation, Link } from '../../i18n'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Post = ({ t }) => (
  <React.Fragment>
    <main>
      <Header title={t('h1')} />
      <Link href="/">
        <button type="button">{t('back-to-home')}</button>
      </Link>
    </main>
    <Footer />
  </React.Fragment>
)
Post.getInitialProps = async () => ({
  namespacesRequired: ['second-page', 'footer'],
})

Post.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('second-page')(Post)
