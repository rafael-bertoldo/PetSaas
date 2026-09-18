FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["PetSaas.Api/PetSaas.Api.csproj", "PetSaas.Api/"]
COPY ["PetSaas.Application/PetSaas.Application.csproj", "PetSaas.Application/"]
COPY ["PetSaas.Domain/PetSaas.Domain.csproj", "PetSaas.Domain/"]
COPY ["PetSaas.Infrastructure/PetSaas.Infrastructure.csproj", "PetSaas.Infrastructure/"]

RUN dotnet restore "PetSaas.Api/PetSaas.Api.csproj"

COPY . .

RUN dotnet publish "PetSaas.Api/PetSaas.Api.csproj" \
    -c Release \
    -o /app/publish \
    --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080

EXPOSE 8080

ENTRYPOINT ["dotnet", "PetSaas.Api.dll"]