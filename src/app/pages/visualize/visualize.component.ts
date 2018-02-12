import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import jsonldVis from 'jsonld-vis';
import {Paper} from '../../models/paper';
import {JsonService} from '../../services/json.service';
@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {
  paper: Paper;

  constructor(private jsonService:JsonService) {
    this.paper = new Paper("","","","","","","");
  }

  ngOnInit() {
    var length = window.location.href.split('/').length;
    var id = window.location.href.split('/')[length -1 ];
    var theAuthors = []
    var citations = []
    console.log(id)
    this.jsonService.getPaperById(id).subscribe((post) =>{
      console.log(post.author)
      if(Array.isArray(post.author)) {
        console.log("aici")
        post.author.forEach(author => {
          var length = author.split('/').length;
          var id = author.split('/')[length - 1];
          console.log(id)
          this.jsonService.getAuthors(id).subscribe((authorName) => {
            theAuthors.push(authorName['http://schema.org/name'])
            // console.log(authorName['http://schema.org/name'])
          })
        });
        this.paper.authors = theAuthors
      } else{
        console.log("altceva")
        console.log(post.authors)
        var length = post.author.split('/').length;
        var id = post.author.split('/')[length - 1];
        this.jsonService.getAuthors(id).subscribe((authorName) => {
          this.paper.authors= authorName['http://schema.org/name']
          // console.log(authorName['http://schema.org/name'])
        })
      }
      // if( post.citation == null || post.citation == "") {
      //   for (let citation of post.citation) {
      //     var length = citation.split('/').length;
      //     var id = citation.split('/')[length - 1];
      //     this.jsonService.getPaperById(id).subscribe((cit) => {
      //       console.log(cit)
      //     })
      //   }
      // }
      this.paper.citations = post.citation
      this.paper.publishDate = post.datePublished
      this.paper.domain = post['@type']

      jsonldVis(d3);
      d3.jsonldVis(post, '#graph', {
        h: 1000, // height
        w: 1400, // width
        maxLabelWidth: 250, // maximum label width
        transitionDuration: 750, // transition duration, in ms
        transitionEase: 'cubic-in-out', // transition easing function
        minRadius: 5, // minimum node radius
        scalingFactor: 2 // factor to scale node sizes
      });
    })


  }


}

const DATA = {
  '@id': 'http://example.com/article',
  '@type': 'ScholarlyArticle',

  'name': 'article title',

  'about': {
    '@id': 'http://id.nlm.nih.gov/mesh/D007251',
    '@type': 'InfectiousDisease',
    'name': 'Influenza, Human',
    'description': 'An acute viral infection in humans involving the respiratory tract. It is marked by inflammation of the NASAL MUCOSA; the PHARYNX; and conjunctiva, and by headache and severe, often generalized, myalgia.',
    'code': {
      '@type': 'MedicalCode',
      'codeValue': 'D007251',
      'codingSystem': 'MeSH'
    },
    'mainEntityOfPage': {
      '@id': '#Discussion'
    }
  },

  'author': {
    '@type': 'ContributorRole',

    'author': {
      '@id': 'http://example.com/peter',
      '@type': 'Person',
      'affiliation': [
        {
          '@id': 'http://www.princeton.edu',
          '@type': 'CollegeOrUniversity'
        },
        {
          '@id': 'http://www.harvard.edu/',
          '@type': 'CollegeOrUniversity'
        }
      ]
    },

    'roleAffiliation': {
      '@id': 'http://www.princeton.edu',
      '@type': 'CollegeOrUniversity'
    },

    'sponsor': {
      '@type': 'SponsorRole',
      'sponsor': {
        '@type': 'Organization'
      },
      'roleOffer': {
        '@type': 'FundingSource',
        'serialNumber': 'grantId'
      },
      'startDate': '2015-01-01'
    },

    'roleComment': [
      {
        '@type': 'Comment',
        'text': 'senior author on this work',
        'about': {
          '@type': 'CreateAction'
        }
      },

      {
        '@type': 'Comment',
        'text': 'wrote the article',
        'about': {
          '@type': 'WriteAction'
        }
      },

      {
        '@type': 'DisclosureStatement',
        'text': 'received personal fees for consulting for: Pfizer Inc - New York, NY, USA.',
        'about': {
          '@type': 'PayAction',
          'agent': {
            '@type': 'Corporation',
            'name': 'Pfizer'
          }
        }
      },

      {
        '@type': 'AcknowledgementStatement',
        'text': 'acknowledge the proofreading work of: Bush, Vannevar "Vannevar Bush\"',
        'about': {
          '@type': 'ReadAction',
          'agent': {
            '@type': 'Person',
            'name': 'Vannevar Bush'
          }
        }
      }
    ]
  },

  'hasPart': [
    {
      '@id': 'http://example.com/image',
      '@type': 'Image',
      'alternateName': 'figure 1',
      'caption': 'Growth of X as a function of Y',
      'encoding': [
        {
          '@id': 'http://example.com/encodingsmall',
          '@type': 'ImageObject',
          'contentUrl': 'http://example.com/small',
          'height': '400px',
          'width': '400px',
          'isBasedOnUrl': 'http://example.com/encodinglarge'
        },
        {
          '@id': 'http://example.com/encodinglarge',
          '@type': 'ImageObject',
          'contentUrl': 'http://example.com/large',
          'height': '1200px',
          'width': '1200px'
        }
      ],
      'isBasedOnUrl': 'http://example.com/code'
    },
    {
      '@id': 'http://example.com/code',
      '@type': 'SoftwareSourceCode',
      'codeRepository': 'http://example.com/repository'
    }
  ],

  'sponsor': {
    '@type': 'SponsorRole',
    'sponsor': {
      '@type': 'Organization'
    },
    'roleOffer': {
      '@type': 'FundingSource',
      'serialNumber': 'grantId'
    },
    'startDate': '2015-01-01'
  },

  'isPartOf': {
    '@id': 'issueId',
    '@type': 'PublicationIssue',
    'issueNumber': 10,
    'isPartOf': {
      '@id': 'volumeId',
      '@type': 'PublicationVolume',
      'volumeNumber': 2,
      'isPartOf': {
        '@id': 'periodicalId',
        '@type': 'Periodical'
      }
    }
  },

  'citation': [
    {
      '@type': 'ScholarlyArticle',
      'name': 'On the effect of X on Y',
      'author': {
        '@type': 'Person',
        'givenName': 'Peter',
        'familyName': 'Smith',
        'additionalName': 'Jon',
        'name': 'Peter J Smith'
      },
      'isPartOf': {
        '@type': 'PublicationIssue',
        'issueNumber': 4,
        'isPartOf': {
          '@type': 'PublicationVolume',
          'volumeNumber': 7,
          'isPartOf': {
            '@type': 'Periodical',
            'name': 'Journal of metaphysics'
          }
        }
      },
      'pageStart': '615',
      'pageEnd': '620',
      'datePublished': {
        '@type': 'xsd:gYear',
        '@value': 2015
      }
    },

    {
      '@id': 'http://example.com/article',
      '@type': 'Webpage',
      'name': 'How much does \'typesetting\' cost?',
      'author': {
        '@type': 'Person',
        'givenName': 'James',
        'familyName': 'Sullivan',
        'name': 'James Sullivan'
      },
      'datePublished': {
        '@value': '2015-06-11',
        '@type': 'xsd:date'
      },
      'potentialAction': {
        '@type': 'ReadAction',
        'actionStatus': 'CompletedActionStatus',
        'endTime': {
          '@value': '2015-06-11',
          '@type': 'xsd:date'
        }
      }
    }
  ],

  'potentialAction': [
    {
      '@type': 'ReadAction',
      'expectsAcceptanceOf': {
        '@type': 'Offer',
        'potentialAction': {
          '@type': 'PayAction',
          'price': '100USD'
        }
      }
    },

    {
      '@type': 'ReviewAction',
      'agent-input': {
        '@type': 'PropertyValueSpecification',
        'valueRequired': true
      },
      'resultReview-input': {
        '@type': 'PropertyValueSpecification',
        'valueRequired': true
      },
      'target': {
        '@type': 'EntryPoint',
        'httpMethod': 'PUT',
        'urlTemplate': 'http://example.com/review'
      }
    },


    {
      '@type': 'AddAction',
      'targetCollection': {
        '@id': 'issueId',
        '@type': 'PublicationIssue',
        'issueNumber': 10,
        'isPartOf': {
          '@id': 'volumeId',
          '@type': 'PublicationVolume',
          'volumeNumber': 2,
          'isPartOf': {
            '@id': 'periodicalId',
            '@type': 'Periodical',
            'name': 'Tiqqun'
          }
        }
      }
    }
  ]

};

