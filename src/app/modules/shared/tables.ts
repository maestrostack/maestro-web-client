export const tables = {
  modules: {
    servicePath: 'api/terraform/modules',
    displayName: 'Terraform Modules',
    shortName: 'Module',
    singularName: 'Module',
    node_type: 'terraform',
    icon: 'terraform',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record',
        parent: 'modules'
      },
      {
        label: 'Variables',
        type: 'child-table',
        child: 'moduleVariables',
        filterRecords: true,
        filterOn: '_id',
        filterOnParent: true,
        servicePath: 'api/terraform/module-variables'
      },

    ],
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Repo',
        name: 'repo',
        type: 'string',
        hide: true
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: false
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The name of the Module displayed to users in the catalog and workflow designer.',
          type: 'text'
        },
        {
          label: 'Repo',
          name: 'repo',
          required: true,
          help: 'The Git repository used to clone the Terraform Module.',
          type: 'text'
        },
        {
          label: 'Icon',
          name: 'icon',
          required: true,
          help: 'The Clarity.Design icon to be used when this item is displayed in the catalog and studio.',
          type: 'text'
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
          type: 'textarea'
        }
      ]
    }
  },
  moduleVariables: {
    servicePath: 'api/terraform/module-variables',
    displayName: 'Terraform Module Variables',
    shortName: 'Variable',
    singularName: 'Variable',
    icon: 'terraform',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record'
      },

    ],
    listViewCols: [
      {
        label: 'Label',
        name: 'label',
        type: 'text',
        hide: false
      },
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: true
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: true
      },
      {
        label: 'Order',
        name: 'display_order',
        type: 'number',
        hide: false
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Label',
          name: 'label',
          required: true,
          help: 'Variable labels are displayed to users in the catalog and workflow designer.',
          type: 'text'
        },
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'Variables names map 1:1 to the variable used in the Terraform Module.',
          type: 'text'
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'What is the intent of this variable? This text will be displayed to users in the catalog and the workflow designer.',
          type: 'textarea'
        },
        {
          label: 'Order',
          name: 'display_order',
          required: true,
          default: 100,
          help: 'This field can be used to manipulate the order in which variables are displayed in the catalog.',
          type: 'text'
        },
      ]
    }
  },
  towerWorkflows: {
    servicePath: 'api/tower/workflows',
    displayName: 'Tower Workflows',
    shortName: 'Workflows',
    node_type: 'tower',
    singularName: 'Tower Workflow',
    icon: 'layers',
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Repo',
        name: 'repo',
        type: 'string',
        hide: true
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: false
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The name of the Module displayed to users in the catalog and workflow designer.',
          type: 'text'
        },
        {
          label: 'Repo',
          name: 'repo',
          required: true,
          help: 'The Git repository used to clone the Terraform Module.',
          type: 'text'
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
          type: 'textarea'
        }
      ]
    }
  },
  workflows: {
    servicePath: 'workflows',
    displayName: 'Workflows',
    shortName: 'Workflows',
    singularName: 'Workflow',
    icon: 'design',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record'
      },
      {
        label: 'Stacks',
        type: 'child-table',
        child: 'stacks',
        filterRecords: true,
        filterOn: '_id',
        filterOnParent: true,
        servicePath: 'stacks'
      },
      {
        label: 'Design',
        type: 'launch-workflow-designer'
      }

    ],
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Type',
        name: 'type',
        type: 'string',
        hide: false
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: false
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The "Display Name" that is used when this workflow is displayed in the catalog.',
          type: 'text'
        },
        {
          label: 'Icon',
          name: 'icon',
          required: true,
          help: 'The icon used when displaying this workflow throughout the UI.',
          type: 'text'
        },
        {
          label: 'Type',
          name: 'type',
          required: true,
          help: 'The topic of the workflow limits where the workflow is displayed and where it can be launched.',
          type: 'text',
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'Describe the use case for this workflow.  If the topic is provision/stack this description will be used in the catalog when requesting a new stack.',
          type: 'textarea'
        }
      ]
    }
  },
  workflowNodes: {
    servicePath: 'workflow-blocks',
    displayName: 'Workflow Blocks',
    shortName: 'Blocks',
    singularName: 'Block',
    icon: 'design',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record'
      },
      {
        label: 'Stacks',
        type: 'child-table',
        child: 'stacks',
        filterRecords: true,
        filterOn: '_id',
        filterOnParent: true,
        servicePath: 'api/stacks'
      },
      {
        label: 'Design',
        type: 'launch-workflow-designer'
      }

    ],
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: false
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The "Display Name" that is used when this workflow is displayed in the catalog.',
          type: 'text'
        },
        // {
        //   label: 'Type',
        //   name: 'type',
        //   required: true,
        //   help: 'Is this a catalog item or ',
        //   type: 'select'
        // },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
          type: 'textarea'
        }
      ]
    }
  },
  workflowNodeVariables: {
    servicePath: 'workflow-block-variables',
    displayName: 'Resource Variables',
    shortName: 'Variables',
    singularName: 'Variable',
    icon: 'design',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record'
      }

    ],
    listViewCols: [
      {
        label: 'Label',
        name: 'label',
        type: 'string',
        hide: false
      },
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: true
      },
      {
        label: 'Editable',
        name: 'can_edit',
        type: 'string',
        hide: false
      },
      {
        label: 'Order',
        name: 'order',
        type: 'string',
        hide: false
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: true
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: true
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Label',
          name: 'label',
          required: true,
          help: 'The "Display Name" that is used when this workflow is displayed in the catalog.',
          type: 'text'
        },
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The actual name of the variable that the block is expecting to be passed from Maestro.',
          type: 'text'
        },
        {
          label: 'Editable',
          name: 'can_edit',
          required: true,
          help: 'Can this variable be overwritten by a user in the catalog?',
          type: 'select',
          default: true,
          options: [
            {
              label: 'True',
              value: true
            },
            {
              label: 'False',
              value: true
            }
          ]
        },
        {
          label: 'Display Order',
          name: 'order',
          required: true,
          help: 'The order in which the variables are displayed to the user when a stack is deployed using the workflow.',
          type: 'number'
        },
        {
          label: 'Default Value',
          name: 'default_value',
          required: true,
          help: 'This will be used as the default value for the variable.',
          type: 'text'
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
          type: 'textarea'
        }
      ]
    }
  },
  stacks: {
    servicePath: 'stacks',
    displayName: 'Stacks',
    shortName: 'Stacks',
    singularName: 'Stack',
    hideAddAction: true,
    icon: 'layers',
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'State',
        name: 'state',
        type: 'string',
        hide: false
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: true
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The name of the Module displayed to users in the catalog and workflow designer.',
          type: 'text'
        },
        {
          label: 'Repo',
          name: 'repo',
          required: true,
          help: 'The Git repository used to clone the Terraform Module.',
          type: 'text'
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
          type: 'textarea'
        }
      ]
    }
  },
  pwshScripts: {
    servicePath: 'api/scripts/pwsh',
    displayName: 'Powershell Scripts',
    shortName: 'Scripts',
    singularName: 'Script',
    node_type: 'pwsh',
    icon: 'pwsh',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record',
        parent: 'modules'
      },
      {
        label: 'Variables',
        type: 'child-table',
        child: 'moduleVariables',
        filterRecords: true,
        filterOn: '_id',
        filterOnParent: true,
        servicePath: 'api/terraform/module-variables'
      },

    ],
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Repo',
        name: 'repo',
        type: 'string',
        hide: true
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: false
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The name of the script as it should be displayed in the UI to users.',
          type: 'text'
        },
        {
          label: 'Repo',
          name: 'repo',
          required: true,
          help: 'The Git repository that contains the source for the script.',
          type: 'text'
        },
        {
          label: 'Entry Point',
          name: 'entry_point',
          required: true,
          help: 'Since the repo may contain more than one script or module this is the script that will be executed when this activity is ran as part of a workflow.',
          type: 'text'
        },
        {
          label: 'Icon',
          name: 'icon',
          required: true,
          help: 'The name of the https://clarity.design/icons icon that will be displayed in the UI.',
          type: 'text'
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'What is the purpose and expected outcome of this script?',
          type: 'textarea'
        }
      ]
    }
  },
  customIcons: {
    servicePath: 'custom-icons',
    displayName: 'Custom Icons',
    shortName: 'Icons',
    singularName: 'Icon',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record',
        parent: 'customIcons'
      }
    ],
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: false
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The name of the icon',
          type: 'text'
        },
        {
          label: 'SVG Data',
          name: 'svg',
          required: true,
          help: 'The SVG data for the icon.',
          type: 'textarea'
        }
      ]
    }
  },
  users: {
    servicePath: 'users',
    displayName: 'Users',
    shortName: 'Users',
    singularName: 'User',
    node_type: 'pwsh',
    icon: 'user',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record',
        parent: 'modules'
      },
      {
        label: 'Groups',
        type: 'child-table',
        child: 'moduleVariables',
        filterRecords: true,
        filterOn: '_id',
        filterOnParent: true,
        servicePath: 'api/terraform/module-variables'
      },
      {
        label: 'Organizations',
        type: 'child-table',
        child: 'moduleVariables',
        filterRecords: true,
        filterOn: '_id',
        filterOnParent: true,
        servicePath: 'api/terraform/module-variables'
      },
      {
        label: 'Teams',
        type: 'child-table',
        child: 'moduleVariables',
        filterRecords: true,
        filterOn: '_id',
        filterOnParent: true,
        servicePath: 'api/terraform/module-variables'
      },

    ],
    listViewCols: [
      {
        label: 'First Name',
        name: 'first_name',
        type: 'string',
        hide: false
      },
      {
        label: 'Last Name',
        name: 'last_name',
        type: 'string',
        hide: false
      },
      {
        label: 'Email',
        name: 'email',
        type: 'string',
        hide: false
      }
    ],
    addRecordForm: {
      fields: [
        {
          label: 'First Name',
          name: 'first_name',
          required: true,
          help: '',
          type: 'text'
        },
        {
          label: 'Last Name',
          name: 'last_name',
          required: true,
          help: '',
          type: 'text'
        },
        {
          label: 'Email',
          name: 'email',
          required: true,
          help: '',
          type: 'text'
        },
        {
          label: 'Password',
          name: 'password',
          required: true,
          showOnEdit: false,
          help: '',
          type: 'password'
        },
        {
          label: 'Notes',
          name: 'notes',
          required: true,
          help: '',
          type: 'textarea'
        }
      ]
    }
  },
  blocks: {
    servicePath: 'blocks',
    displayName: 'Blocks',
    shortName: 'Blocks',
    singularName: 'Block',
    icon: 'block',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record',
        parent: 'blocks'
      },
      {
        label: 'Variables',
        type: 'child-table',
        child: 'blockVariables',
        filterRecords: true,
        filterOn: '_id',
        filterField: 'parent_block',
        filterOnParent: true,
        servicePath: 'block-variables'
      },
      // {
      //   label: 'Groups',
      //   type: 'child-table',
      //   child: 'moduleVariables',
      //   filterRecords: true,
      //   filterOn: '_id',
      //   filterOnParent: true,
      //   servicePath: 'api/terraform/module-variables'
      // },
      // {
      //   label: 'Organizations',
      //   type: 'child-table',
      //   child: 'moduleVariables',
      //   filterRecords: true,
      //   filterOn: '_id',
      //   filterOnParent: true,
      //   servicePath: 'api/terraform/module-variables'
      // },
      // {
      //   label: 'Teams',
      //   type: 'child-table',
      //   child: 'moduleVariables',
      //   filterRecords: true,
      //   filterOn: '_id',
      //   filterOnParent: true,
      //   servicePath: 'api/terraform/module-variables'
      // },

    ],
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Type',
        name: '_type',
        type: 'reference',
        reference: {
          parentTable: 'blockTypes',
          servicePath: 'block-types',
          parentKey: '_id',
          parentDisplay: 'name'
        },
        hide: false
      },
      {
        label: 'Repository',
        name: 'scm_url',
        type: 'string',
        hide: false
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: true
      }
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The name of the block type.',
          type: 'text'
        },
        {
          label: 'Type',
          name: '_type',
          required: true,
          help: 'The parent block type used to assign activities to the correct queue/topic',
          type: 'select-reference',
          reference: {
            parentTable: 'blockTypes',
            servicePath: 'block-types',
            parentKey: '_id',
            parentDisplay: 'name'
          }
        },
        {
          label: 'Repository',
          name: 'scm_url',
          required: true,
          help: 'The "HTTPS" url used to clone the sorce for block when it is executed by a workflow.',
          type: 'text'
        },
        {
          label: 'Icon',
          name: 'icon',
          required: true,
          help: 'The icon shown in the catalog and workflow editor for this block.',
          type: 'text'
        },
        {
          label: 'Description',
          name: 'description',
          required: false,
          help: '',
          type: 'textarea'
        }
      ]
    }
  },
  blockVariables: {
    servicePath: 'block-variables',
    displayName: 'Block Variables',
    shortName: 'Variable',
    singularName: 'Variable',
    icon: 'terraform',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record'
      },

    ],
    listViewCols: [
      {
        label: 'Label',
        name: 'label',
        type: 'string',
        hide: false
      },
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: true
      },
      {
        label: 'Editable',
        name: 'can_edit',
        type: 'string',
        hide: false
      },
      {
        label: 'Order',
        name: 'order',
        type: 'string',
        hide: false
      },
      {
        label: 'Description',
        name: 'description',
        type: 'string',
        hide: true
      },
      {
        label: 'Created',
        name: 'created_at',
        type: 'string',
        hide: true
      },
      {
        label: 'Created By',
        name: 'created_by',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated',
        name: 'updated_at',
        type: 'string',
        hide: true
      },
      {
        label: 'Updated By',
        name: 'updated_by',
        type: 'string',
        hide: true
      },
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Label',
          name: 'label',
          required: true,
          help: 'The "Display Name" that is used when this workflow is displayed in the catalog.',
          type: 'text'
        },
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The actual name of the variable that the block is expecting to be passed from Maestro.',
          type: 'text'
        },
        {
          label: 'Editable',
          name: 'can_edit',
          required: true,
          help: 'Can this variable be overwritten by a user in the catalog?',
          type: 'select',
          default: true,
          options: [
            {
              label: 'True',
              value: true
            },
            {
              label: 'False',
              value: true
            }
          ]
        },
        {
          label: 'Display Order',
          name: 'order',
          required: true,
          help: 'The order in which the variables are displayed to the user when a stack is deployed using the workflow.',
          type: 'number'
        },
        {
          label: 'Default Value',
          name: 'default_value',
          required: true,
          help: 'This will be used as the default value for the variable.',
          type: 'text'
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
          type: 'textarea'
        }
      ]
    }
  },
  blockTypes: {
    servicePath: 'block-types',
    displayName: 'Block Types',
    shortName: 'Block Types',
    singularName: 'Block Type',
    icon: 'blocks-group',
    recordDetailTabs: [
      {
        label: 'Details',
        type: 'edit-record',
        parent: 'block-types'
      },
      // {
      //   label: 'Groups',
      //   type: 'child-table',
      //   child: 'moduleVariables',
      //   filterRecords: true,
      //   filterOn: '_id',
      //   filterOnParent: true,
      //   servicePath: 'api/terraform/module-variables'
      // },
      // {
      //   label: 'Organizations',
      //   type: 'child-table',
      //   child: 'moduleVariables',
      //   filterRecords: true,
      //   filterOn: '_id',
      //   filterOnParent: true,
      //   servicePath: 'api/terraform/module-variables'
      // },
      // {
      //   label: 'Teams',
      //   type: 'child-table',
      //   child: 'moduleVariables',
      //   filterRecords: true,
      //   filterOn: '_id',
      //   filterOnParent: true,
      //   servicePath: 'api/terraform/module-variables'
      // },

    ],
    listViewCols: [
      {
        label: 'Name',
        name: 'name',
        type: 'string',
        hide: false
      },
      {
        label: 'Topic',
        name: 'topic',
        type: 'string',
        hide: false
      },
      {
        label: 'Container Image',
        name: 'container_image',
        type: 'string',
        hide: false
      },
      {
        label: 'Container Tag',
        name: 'container_tag',
        type: 'string',
        hide: false
      },
      {
        label: 'Notes',
        name: 'notes',
        type: 'string',
        hide: true
      }
    ],
    addRecordForm: {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          help: 'The name of the block type.',
          type: 'text'
        },
        {
          label: 'Topic',
          name: 'topic',
          required: true,
          help: 'The topic set in the task queue when a workflow contains an activity using this block.',
          type: 'text'
        },
        {
          label: 'Container Image',
          name: 'container_image',
          required: true,
          help: 'The docker container image used for this block type.',
          type: 'text'
        },
        {
          label: 'Container Tag',
          name: 'container_tag',
          required: true,
          help: 'The docker container image tag used for this block type.',
          type: 'text'
        },
        {
          label: 'Notes',
          name: 'notes',
          required: false,
          help: '',
          type: 'textarea'
        }
      ]
    }
  },
}