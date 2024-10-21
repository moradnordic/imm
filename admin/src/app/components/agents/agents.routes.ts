import { Routes } from '@angular/router';
import { AddAgentWizardComponent } from './add-agent-wizard/add-agent-wizard.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { AllAgentComponent } from './all-agent/all-agent.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';
import { InvoiceComponent } from './invoice/invoice.component';

export default [
  {
    path: 'agent-profile',
    component: AgentProfileComponent,
    data: {
      title: 'Agent Profile',
      breadcrumb: 'Agent Profile'
    }
  },
  {
    path: 'add-agent',
    component: AddAgentComponent,
    data: {
      title: 'Add Agent',
      breadcrumb: 'Add Agent'
    }
  },
  {
    path: 'add-agent-wizard',
    component: AddAgentWizardComponent,
    data: {
      title: 'Add Agent Wizard',
      breadcrumb: 'Add Agent Wizard'
    }
  },
  {
    path: 'edit-agent',
    component: EditAgentComponent,
    data: {
      title: 'Edit Agent',
      breadcrumb: 'Edit Agent'
    }
  },
  {
    path: 'all-agent',
    component: AllAgentComponent,
    data: {
      title: 'All Agents',
      breadcrumb: 'All Agents'
    }
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
    data: {
      title: 'Invoice',
      breadcrumb: 'Invoice'
    }
  }
] as Routes;

