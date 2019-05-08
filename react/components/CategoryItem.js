import classNames from 'classnames'
import React, { useState, useCallback } from 'react'
import { Collapsible } from 'vtex.styleguide'

import useFacetNavigation from '../hooks/useFacetNavigation'

const CategoryItem = ({ category }) => {
  const [isOpen, setOpen] = useState(true)

  const handleClick = useCallback(() => {
    setOpen(prevOpen => !prevOpen)
  }, [])

  const navigateToFacet = useFacetNavigation()

  if (!category.children.length) {
    return <span className="ml6 f5 dib">{category.name}</span>
  }

  return (
    <Collapsible
      muted
      header={<span className="f5">{category.name}</span>}
      isOpen={isOpen}
      onClick={handleClick}
    >
      <div className="ml6">
        {category.children.map((childCategory, index) => (
          <div
            tabIndex={0}
            role="link"
            key={childCategory.id}
            className={classNames('lh-copy pointer', { mt2: index === 0 })}
            onClick={() => navigateToFacet(childCategory)}
            onKeyDown={e => e.key === 'Enter' && navigateToFacet(childCategory)}
          >
            {childCategory.name}
          </div>
        ))}
      </div>
    </Collapsible>
  )
}

export default CategoryItem
