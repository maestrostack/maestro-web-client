<div class="canvas-main" style="padding: 5px; margin: 5px">
  <!-- <div class="canvas-menu flex-container">
    <button (click)="onSaveWorkflow();" class="btn btn-sm btn-primary">
      SAVE
    </button>
  </div> -->

  <clr-alert [clrAlertType]="'info'">
    <clr-alert-item>
      <span class="alert-text">
        Drag and drop blocks from the left to add it as a workflow activity.
      </span>
    </clr-alert-item>
  </clr-alert>
  <!-- <div>{{closeMessage}}</div> -->
</div>



<div class="workflow-canvas" clrDroppable (clrDrop)="onResourceDrop($event);">
  <!-- <button (click)="nodeContainer.addNode()">Create new node</button> -->
  <!-- <div id="canvas" class="nodes-container studio-canvas">
    <div class="nodes" style="height: 100%;">
      <ng-template class="ss-node" #nodes [showNodeConfig]="configureNode"></ng-template>
    </div>
  </div> -->

  <!-- START -->
    <!-- ACTIVITY 1 -->
    <!-- SPLIT ACTIVITY 1 -->

  <div class="workflow-activities">
    <div class="card clickable activity start-activity" style="width: 200px; margin: 0 auto;">
      <div class="card-block start-activity" style="text-align: center;">
        <span>START</span>
      </div>
    </div>
    <div class="card-connector-down">
      <div style="height: 45px; background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDpub25lO3N0cm9rZTojNUI1QjVDO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6IzVCNUI1Qzt9PC9zdHlsZT4NCiA8cmVjdCB4PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSIzNy45NzQiIGZpbGw9IiM1MTUxNTEiIHN0cm9rZS13aWR0aD0iNC41MDYyIi8+DQogPHBvbHlnb24gdHJhbnNmb3JtPSJtYXRyaXgoMS4xNzg1IDAgMCAxLjE3ODUgLS42MDY5MiAyMy41NDQpIiBwb2ludHM9IjEuOTI4IDQuMDY1IDguOTk5IDExLjEzNiAxNi4wNzIgNC4wNjUgMTcuNDg2IDUuNDc5IDguOTk5IDEzLjk2NCAwLjUxNSA1LjQ3OSIgZmlsbD0iIzUxNTE1MSIvPg0KPC9zdmc+DQo=&quot;) center center no-repeat;"></div>
    </div>
  </div>


  <div class="connectors flex-container">


    
    <div class="card-connector-left" style="width: 200px; margin: 0 auto;">
      <div class="msla-connector-arrow-right background" style=" height: 45px; background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDpub25lO3N0cm9rZTojNUI1QjVDO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6IzVCNUI1Qzt9PC9zdHlsZT4NCiA8cmVjdCB4PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSIzNy45NzQiIGZpbGw9IiM1MTUxNTEiIHN0cm9rZS13aWR0aD0iNC41MDYyIi8+DQogPHBvbHlnb24gdHJhbnNmb3JtPSJtYXRyaXgoMS4xNzg1IDAgMCAxLjE3ODUgLS42MDY5MiAyMy41NDQpIiBwb2ludHM9IjEuOTI4IDQuMDY1IDguOTk5IDExLjEzNiAxNi4wNzIgNC4wNjUgMTcuNDg2IDUuNDc5IDguOTk5IDEzLjk2NCAwLjUxNSA1LjQ3OSIgZmlsbD0iIzUxNTE1MSIvPg0KPC9zdmc+DQo=&quot;) center center no-repeat;"></div><div style="top: 0;
        right: 0;
        width: 50%;
        border-top: 2px solid #515151;" class="msla-connector-top-line"></div></div>
    </div>

    <div class="card-connector-down" style="width: 200px; margin: 0 auto;">
      <div style="height: 45px; text-align: center; background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDpub25lO3N0cm9rZTojNUI1QjVDO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6IzVCNUI1Qzt9PC9zdHlsZT4NCiA8cmVjdCB4PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSIzNy45NzQiIGZpbGw9IiM1MTUxNTEiIHN0cm9rZS13aWR0aD0iNC41MDYyIi8+DQogPHBvbHlnb24gdHJhbnNmb3JtPSJtYXRyaXgoMS4xNzg1IDAgMCAxLjE3ODUgLS42MDY5MiAyMy41NDQpIiBwb2ludHM9IjEuOTI4IDQuMDY1IDguOTk5IDExLjEzNiAxNi4wNzIgNC4wNjUgMTcuNDg2IDUuNDc5IDguOTk5IDEzLjk2NCAwLjUxNSA1LjQ3OSIgZmlsbD0iIzUxNTE1MSIvPg0KPC9zdmc+DQo=&quot;) center center no-repeat;">
        <button class="add-activity-button btn btn-link" style="margin-top: 5px !important;">
          <clr-icon shape="plus-circle" class="is-solid"></clr-icon>
        </button>
      </div>
    </div>
  </div>

  <div class="workflow-activities flex-container">
    <div class="card clickable activity start-activity" style="width: 200px; margin: 0 auto;">
      <div class="card-block start-activity" style="text-align: center;">
        <span>ACTIVITY 1</span>
      </div>

      <!-- <div class="card-connector-down">
        <div style="height: 45px; text-align: center; background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDpub25lO3N0cm9rZTojNUI1QjVDO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6IzVCNUI1Qzt9PC9zdHlsZT4NCiA8cmVjdCB4PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSIzNy45NzQiIGZpbGw9IiM1MTUxNTEiIHN0cm9rZS13aWR0aD0iNC41MDYyIi8+DQogPHBvbHlnb24gdHJhbnNmb3JtPSJtYXRyaXgoMS4xNzg1IDAgMCAxLjE3ODUgLS42MDY5MiAyMy41NDQpIiBwb2ludHM9IjEuOTI4IDQuMDY1IDguOTk5IDExLjEzNiAxNi4wNzIgNC4wNjUgMTcuNDg2IDUuNDc5IDguOTk5IDEzLjk2NCAwLjUxNSA1LjQ3OSIgZmlsbD0iIzUxNTE1MSIvPg0KPC9zdmc+DQo=&quot;) center center no-repeat;">
          <button class="add-activity-button btn btn-link" style="margin-top: 5px !important;">
            <clr-icon shape="plus-circle" class="is-solid"></clr-icon>
          </button>
        </div>
      </div> -->
    </div>


    <div class="card clickable activity start-activity" style="width: 200px; margin: 0 auto;">
      <div class="card-block start-activity" style="text-align: center;">
        <span>ACTIVITY 2</span>
      </div>
    </div>

  </div>

  <div class="card">
    <div class="card-block">
      <div class="msla-connector-arrow-right background" style=" height: 45px; background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDpub25lO3N0cm9rZTojNUI1QjVDO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6IzVCNUI1Qzt9PC9zdHlsZT4NCiA8cmVjdCB4PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSIzNy45NzQiIGZpbGw9IiM1MTUxNTEiIHN0cm9rZS13aWR0aD0iNC41MDYyIi8+DQogPHBvbHlnb24gdHJhbnNmb3JtPSJtYXRyaXgoMS4xNzg1IDAgMCAxLjE3ODUgLS42MDY5MiAyMy41NDQpIiBwb2ludHM9IjEuOTI4IDQuMDY1IDguOTk5IDExLjEzNiAxNi4wNzIgNC4wNjUgMTcuNDg2IDUuNDc5IDguOTk5IDEzLjk2NCAwLjUxNSA1LjQ3OSIgZmlsbD0iIzUxNTE1MSIvPg0KPC9zdmc+DQo=&quot;) center center no-repeat;"><div style="top: 0;
        width: 100%;
        border-top: 2px solid #515151;" class="msla-connector-top-line"></div></div>
      <div class="msla-connector-arrow-left background" style=" height: 45px; background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDpub25lO3N0cm9rZTojNUI1QjVDO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6IzVCNUI1Qzt9PC9zdHlsZT4NCiA8cmVjdCB4PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSIzNy45NzQiIGZpbGw9IiM1MTUxNTEiIHN0cm9rZS13aWR0aD0iNC41MDYyIi8+DQogPHBvbHlnb24gdHJhbnNmb3JtPSJtYXRyaXgoMS4xNzg1IDAgMCAxLjE3ODUgLS42MDY5MiAyMy41NDQpIiBwb2ludHM9IjEuOTI4IDQuMDY1IDguOTk5IDExLjEzNiAxNi4wNzIgNC4wNjUgMTcuNDg2IDUuNDc5IDguOTk5IDEzLjk2NCAwLjUxNSA1LjQ3OSIgZmlsbD0iIzUxNTE1MSIvPg0KPC9zdmc+DQo=&quot;) center center no-repeat;"><div class="msla-connector-top-line"></div></div>
      <div style="height: 45px; background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDpub25lO3N0cm9rZTojNUI1QjVDO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6IzVCNUI1Qzt9PC9zdHlsZT4NCiA8cmVjdCB4PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSIzNy45NzQiIGZpbGw9IiM1MTUxNTEiIHN0cm9rZS13aWR0aD0iNC41MDYyIi8+DQogPHBvbHlnb24gdHJhbnNmb3JtPSJtYXRyaXgoMS4xNzg1IDAgMCAxLjE3ODUgLS42MDY5MiAyMy41NDQpIiBwb2ludHM9IjEuOTI4IDQuMDY1IDguOTk5IDExLjEzNiAxNi4wNzIgNC4wNjUgMTcuNDg2IDUuNDc5IDguOTk5IDEzLjk2NCAwLjUxNSA1LjQ3OSIgZmlsbD0iIzUxNTE1MSIvPg0KPC9zdmc+DQo=&quot;) center center no-repeat;"></div>
    </div>
    
  </div>