FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["PetSaas.Web/PetSaas.Web.csproj", "PetSaas.Web/"]

RUN dotnet restore "PetSaas.Web/PetSaas.Web.csproj"

COPY . .

RUN dotnet publish "PetSaas.Web/PetSaas.Web.csproj" \
    -c Release \
    -o /app/publish \
    --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080

EXPOSE 8080

ENTRYPOINT ["dotnet", "PetSaas.Web.dll"]