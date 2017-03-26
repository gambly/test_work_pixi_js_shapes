window.onload = function ()  {
   let app = new PIXI.Application(512, 512, {backgroundColor: 0xcccae8});

   app_width = app.renderer.height / app.renderer.resolution;
   app_height = app.renderer.width / app.renderer.resolution;

   var model = new SpawnModel();
   var view = new SpawnView(model, app);
   var controller = new SpawnController(model, view,app);

   let canvas = document.getElementById('canvas')
   app.renderer.view.style.display = "block";
   app.renderer.view.style.marginLeft = "auto";
   app.renderer.view.style.marginRight = "auto";
   app.renderer.view.style.display = "block";
   canvas.appendChild(app.view);

   app.ticker.add(()=> {
      view.tick();
      controller.tick();
   });
};


