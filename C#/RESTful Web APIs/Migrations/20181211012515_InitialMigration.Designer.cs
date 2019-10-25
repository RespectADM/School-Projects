﻿// <auto-generated />
using System;
using Lesson6HandsOnV2.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Lesson6HandsOnV2.Migrations
{
    [DbContext(typeof(CarsContext))]
    [Migration("20181211012515_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity("Lesson6HandsOnV2.Models.Car", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("make");

                    b.Property<string>("model");

                    b.Property<int?>("passengers");

                    b.Property<int?>("year");

                    b.HasKey("id");

                    b.ToTable("Cars");
                });
#pragma warning restore 612, 618
        }
    }
}
