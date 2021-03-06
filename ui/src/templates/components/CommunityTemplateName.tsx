// Libraries
import React, {FC} from 'react'

// Components
import {
  Gradients,
  Heading,
  HeadingElement,
  Panel,
  Button,
  ComponentColor,
  ComponentSize,
  FlexBox,
  FlexDirection,
  AlignItems,
  InfluxColors,
} from '@influxdata/clockface'
import CommunityTemplateNameIcon from 'src/templates/components/CommunityTemplateNameIcon'

interface Props {
  templateName: string
  resourceCount?: number
  onClickInstall?: () => void
}

import {} from 'react'

const CommunityTemplateName: FC<Props> = ({
  templateName,
  resourceCount,
  onClickInstall,
}) => {
  let installButton
  let resourcePlural = 'resources'

  if (resourceCount === 1) {
    resourcePlural = 'resource'
  }

  if (onClickInstall && resourceCount > 0) {
    installButton = (
      <Button
        text="Install Template"
        color={ComponentColor.Success}
        size={ComponentSize.Medium}
        onClick={onClickInstall}
      />
    )
  }

  return (
    <Panel border={true} gradient={Gradients.SpirulinaSmoothie}>
      <Panel.Body
        margin={ComponentSize.Large}
        direction={FlexDirection.Row}
        alignItems={AlignItems.Center}
      >
        <CommunityTemplateNameIcon
          strokeWidth={2}
          strokeColor={InfluxColors.Neutrino}
          width={54}
          height={54}
        />
        <FlexBox.Child grow={1} shrink={0}>
          <Heading
            className="community-templates--template-name"
            element={HeadingElement.H4}
          >
            {templateName}
          </Heading>
          <p className="community-templates--template-description">
            Installing this template will create{' '}
            <strong>
              {resourceCount} {resourcePlural}
            </strong>{' '}
            in your system
          </p>

          <p className="community-templates--template-description">
            There might be extra steps needed to complete your template
            installation, check github to find any further instruction
          </p>
        </FlexBox.Child>
        {installButton}
      </Panel.Body>
    </Panel>
  )
}

export default CommunityTemplateName
