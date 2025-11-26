import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import caseStudy from './caseStudy'
import testimonial from './testimonial'
import service from './service'
import teamMember from './teamMember'
import page from './page'
import seo from './objects/seo'
import accessibleImage from './objects/accessibleImage'

export const schemaTypes = [
    // Documents
    page,
    post,
    author,
    category,
    caseStudy,
    testimonial,
    service,
    teamMember,

    // Objects
    blockContent,
    seo,
    accessibleImage
]
