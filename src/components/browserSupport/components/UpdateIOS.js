// libraries
import React from 'react'

// components
import { t } from '@lingui/macro'
import ExplanationDialog from '../../common/dialogs/ExplanationDialog'
import { Text } from '../../common'

// assets
import illustration from '../../../assets/UnsuportedBrowser.svg'
import Config from '../../../config/config'

// localization

export default ({ onDismiss }) => (
  <ExplanationDialog
    title={t`Oops! Your iOS is outdated`}
    text={
      <Text styles="text-align:center">
        {t`Please update your iOS to access GoodDollar.`}
        {`\n`}
        {t`Minimum version required: iOS`}
        {Config.minimalIOSVersion}
      </Text>
    }
    image={illustration}
    imageHeight={124}
    buttons={[
      {
        text: t`OK, GOT IT`,
        action: onDismiss,
      },
    ]}
  />
)
