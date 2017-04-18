using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WebSocketManager;

namespace SignalrSample
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public void Configure(IApplicationBuilder app, IServiceProvider serviceProvider)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
            app.UseWebSockets();
            app.MapWebSocketManager("/chat", serviceProvider.GetService<ChatHandler>());
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddWebSocketManager();
        }
    }
}
